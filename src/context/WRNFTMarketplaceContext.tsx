"use client";
import React, { useState, useEffect } from "react";
import webM3Modal from "web3modal";
import { ethers } from "ethers";
import { WRNFTMarketPlaceABI, WRNFTMarketPlaceAddress } from "./constants";
import { useRouter } from "next/navigation";
import axios from "axios";

const fetchContract = (signerOrProvider: any) =>
  new ethers.Contract(
    WRNFTMarketPlaceAddress,
    WRNFTMarketPlaceABI,
    signerOrProvider
  );

export const WRNFTMarketplaceContext = React.createContext<any>(undefined);

export const WRNFTMarketplaceProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const router = useRouter();

  const connectingWithSmartContract = async () => {
    try {
      const web3Modal = new webM3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(connection);
      const signer = await provider.getSigner();
      const contract = fetchContract(signer);
      return contract;
    } catch (error) {
      setOpenError(true);
      setError("something went wrong");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    fetchNFTs();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        setOpenError(true);
        setError("No account found");
      }
    } catch (error) {
      setOpenError(true);
      setError("Something went wrong");
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      setOpenError(true);
      setError("Error whilte connecting to wallet");
    }
  };

  const uploadToPinata = async (file: any) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios({
          method: "POST",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: "c1951d48acd3f68cc749",
            pinata_secret_api_key:
              "7713af7bf27832c7fd748b373b69a19282b1dc1557690d72a2010d34bf562b04",
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        return ImgHash;
      } catch (error) {
        setOpenError(true);
        setError("Unable to upload image to Pinata");
      }
    }
  };

  const createSale = async (
    url: any,
    formInputPrice: any,
    isReselling: any,
    id: any
  ) => {
    try {
      const price = ethers.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      if (!contract)
        return (
          setOpenError(true), setError("There is no contract to interacts")
        );
      const listingPrice = await contract.getListingPrice();
      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });
      await transaction.wait();
      // router.push("/SearchPage");
    } catch (error) {
      setOpenError(true);
      setError("Error while creating sale");
    }
  };

  const createNFT = async (
    name: string,
    price: any,
    image: any,
    description: string,
    router: any
  ) => {
    if (!name || !description || !price || !image) {
      return setOpenError(true), setError("Data is missing");
    }
    const data = JSON.stringify({ name, description, image });
    try {
      const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: data,
        headers: {
          pinata_api_key: "c1951d48acd3f68cc749",
          pinata_secret_api_key:
            "7713af7bf27832c7fd748b373b69a19282b1dc1557690d72a2010d34bf562b04",
          "Content-Type": "application/json",
        },
      });
      const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      await createSale(url, price, false, null);
      router.push("/SearchPage");
    } catch (error) {
      setOpenError(true);
      setError("Create NFT error");
    }
  };

  // FETCH NFT FUNCTIONS
  const fetchNFTs = async () => {
    try {
      const web3Modal = new webM3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(connection);
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItem();
      const items = await Promise.all(
        data.map(
          async ({
            tokenId,
            seller,
            owner,
            price: unformattedPrice,
          }: {
            tokenId: any;
            seller: any;
            owner: any;
            price: any;
          }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              price,
              tokenId,
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      setOpenError(true);
      setError("Error while fetching NFTs");
    }
  };

  const fetchMyNFTsOrListedNFTs = async (type: string) => {
    try {
      const contract = await connectingWithSmartContract();
      const data =
        type == "fetchItemsListed"
          ? await contract!.fetchItemsListed()
          : await contract!.fetchMyNFT();
      const items = await Promise.all(
        data.map(
          async ({
            tokenId,
            seller,
            owner,
            price: unformattedPrice,
          }: {
            tokenId: any;
            seller: any;
            owner: any;
            price: any;
          }) => {
            const tokenURI = await contract!.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              price,
              tokenId,
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      setOpenError(true);
      setError("Error while fetching listed NFTs");
    }
  };

  const buyNFT = async (nft: any) => {
    try {
      const contract = await connectingWithSmartContract();
      const tokenId = parseInt(nft.tokenId);
      const price = ethers.parseUnits(nft.price.toString(), "ether");
      console.log(price);
      if (!contract) return;
      const transaction = await contract.createMarketSale(tokenId, {
        value: price,
      });
      await transaction.wait();
      // // router.push('/author')
      router.push("/SearchPage");
    } catch (error) {
      setOpenError(true);
      setError("Error while buying NFT");
    }
  };

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("");
  }, []);

  return (
    <WRNFTMarketplaceContext.Provider
      value={{
        checkIfWalletIsConnected,
        connectWallet,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        uploadToPinata,
        currentAccount,
        setOpenError,
        openError,
        setError,
        error,
      }}
    >
      {children}
    </WRNFTMarketplaceContext.Provider>
  );
};
