"use client";
import React, { useState, useEffect, useContext } from "react";
import webM3Modal from "web3Modal";
import { ethers } from "ethers";
import Router from "next/router";
import { WRNFTMarketPlaceABI, WRNFTMarketPlaceAddress } from "./constants";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

const fetchContract = (signerOrProvider: any) =>
  new ethers.Contract(
    WRNFTMarketPlaceAddress,
    WRNFTMarketPlaceABI,
    signerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new webM3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("something went wrong", error);
  }
};

const projectId = "";
const projectSecretKey = "";
const auth = `Basic${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;
const subdomain = "";

const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export const WRNFTMarketplaceContext = React.createContext<any>(undefined);

export const WRNFTMarketplaceProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return console.log("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const uploadToIPFS = async (file: any) => {
    try {
      const added = await client.add({ content: file });
      const url = `${subdomain}/ipfs/${added.path}`;
      return url;
    } catch (error) {
      console.log("Error uploading to IPFS");
      return "";
    }
  };

  const uploadToPinata = async (file) => {
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
        console.log("Unable to upload image to Pinata");
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
      if (!contract) return console.log("There is no contract to interacts");
      const listingPrice = await contract.getListingPrice();
      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });
      await transaction.wait();
    } catch (error) {
      console.log("Error while creating sale", error);
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
      return console.log("Data is missing", name, description, price);
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
    } catch (error) {
      console.log("Create NFT Error", error);
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
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
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
              tokenId: tokenId.toNumber(),
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
      console.log("Error while fetching NFTs");
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
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
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
              tokenId: tokenId.toNumber(),
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
      console.log("error while fetching listed NFTs");
    }
  };

  const buyNFT = async (nft: any) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.parseUnits(nft.price.toString(), "ether");
      const transaction = await contract!.createMarketSale(nft.tokenId, {
        value: price,
      });
      await transaction.wait();
    } catch (error) {}
  };

  return (
    <WRNFTMarketplaceContext.Provider
      value={{
        checkIfWalletIsConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        uploadToPinata,
        currentAccount,
      }}
    >
      {children}
    </WRNFTMarketplaceContext.Provider>
  );
};
