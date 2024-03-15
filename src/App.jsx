import { useState } from "react";
import { Box, Button, Dialog, TextField, Container, Flex, Text } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import AppTabs from "./component/AppTabs";
import useCollections from "./hooks/useCollections";
import useMyNfts from "./hooks/useMyNfts";
import useMint from "./hooks/useMint";

configureWeb3Modal();

function App() {
    const tokensData = useCollections();
    const myTokenIds = useMyNfts();
    // const [selectedTokenId, setSelectedTokenId] = useState(null);
    const [address, setAddress] = useState("")
    const handleMint = useMint(address)

    const myTokensData = tokensData.filter((x, index) =>
        myTokenIds.includes(index)
    );
    // console.log(tokensData[0].edition)
    // console.log(tokensData)
    // console.log(selectedTokenId)

    return (
        <Container>
            <Header />
            <main className="mt-6">
        <AppTabs
            MyNfts={
                <Flex align="center" gap="8" wrap={"wrap"}>
                    {myTokensData.length === 0 ? (
                        <Text>No NFT owned yet</Text>
                    ) : (
                        myTokensData.map((x) => (
                            <Box key={x.dna} className="w-[20rem]">
                                <img
                                    src={x.image}
                                    className="w-full object-contain"
                                    alt={x.name}
                                />
                                <Text className="block text-2xl">
                                    Name: {x.name}
                                </Text>
                                <Text className="block">
                                    Description: {x.description}
                                </Text>
                                <Button className="px-8 py-2 text-xl mt-2">
                                    Mint
                                </Button>
                                <Button className="px-8 py-2 text-xl mt-2">
                                    Transfer
                                </Button>
                            </Box>
                        ))
                    )}
                </Flex>
            }
            AllCollections={
                <Flex align="center" gap="8" wrap={"wrap"}>
                    {tokensData.length === 0 ? (
                        <Text>Loading...</Text>
                    ) : (
                        tokensData.map((x, index) => (
                            <div>
                            <Box key={x.dna} className="w-[20rem]">
                                <img
                                    src={x.image}
                                    className="w-full object-contain"
                                    alt={x.name}
                                />
                                <Text className="block text-2xl">
                                    Name: {x.name}
                                </Text>
                                <Text className="block">
                                    Description: {x.description}
                                </Text>
                            </Box>
                                {/* <DialogBox index={index} onClick={() => setSelectedTokenId(index)} /> */}
                                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button className="bg-gradient-to-r from-[magenta] to-[violet] w-[50%] mt-4" >Mint</Button>
                    </Dialog.Trigger>

                    <Dialog.Content style={{ maxWidth: 450 }}>
                        <Dialog.Title>Mint Details</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                        Details about the NFT to mint
                        </Dialog.Description>

                        <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                            Receipient address
                            </Text>
                            <TextField.Input
                            defaultValue="0x02333.."
                            placeholder="Enter your wallet address"
                            onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                            TokenId
                            </Text>
                            <TextField.Input
                            defaultValue={index}
                            placeholder={index} readOnly
                            />
                        </label>
                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" className="bg-gradient-to-r from-gray-400 to-black text-white" >
                            Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button className="bg-gradient-to-r from-[magenta] to-[violet]" onClick={()=>handleMint(index)}>Save</Button>
                        </Dialog.Close>
                        </Flex>
                    </Dialog.Content>
                    </Dialog.Root>
                                        </div>
                                ))
                            )}
                        </Flex>
                    }
                />
            </main>
        </Container>
    );
}

export default App;
