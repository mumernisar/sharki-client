// import { useEffect } from "react";
// import {
//   useDisconnect,
//   useAppKit,
//   useAppKitNetwork,
//   useAppKitAccount,
// } from "@reown/appkit/react";
// import { parseGwei } from "viem";
// import {
//   useEstimateGas,
//   useSendTransaction,
//   useSignMessage,
//   useBalance,
// } from "wagmi";
// import { networks } from "../config/appkit";

// // test transaction
// const TEST_TX = {
//   to: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
//   value: parseGwei("0.0001"),
// };

// export const ActionButtonList = ({ sendHash, sendSignMsg, sendBalance }) => {
//   const { disconnect } = useDisconnect();
//   const { open } = useAppKit();
//   const { switchNetwork } = useAppKitNetwork();
//   const { address, isConnected } = useAppKitAccount();

//   const { data: gas } = useEstimateGas({ ...TEST_TX });
//   const { data: hash, sendTransaction } = useSendTransaction();
//   const { signMessageAsync } = useSignMessage();
//   const { refetch } = useBalance({
//     address: address,
//   });

//   useEffect(() => {
//     if (hash) {
//       sendHash(hash);
//     }
//   }, [hash]);

//   const handleSendTx = () => {
//     try {
//       sendTransaction({
//         ...TEST_TX,
//         gas,
//       });
//     } catch (err) {
//       console.log("Error sending transaction:", err);
//     }
//   };

//   const handleSignMsg = async () => {
//     const msg = "Hello Reown AppKit!";
//     const sig = await signMessageAsync({
//       message: msg,
//       account: address,
//     });
//     sendSignMsg(sig);
//   };

//   const handleGetBalance = async () => {
//     const balance = await refetch();
//     sendBalance(
//       balance?.data?.value.toString() + " " + balance?.data?.symbol.toString()
//     );
//   };

//   const handleDisconnect = async () => {
//     try {
//       await disconnect();
//     } catch (error) {
//       console.error("Failed to disconnect:", error);
//     }
//   };

//   return (
//     isConnected && (
//       <div>
//         <button onClick={() => open()}>Open</button>
//         <button onClick={handleDisconnect}>Disconnect</button>
//         <button onClick={() => switchNetwork(networks[1])}>Switch</button>
//         <button onClick={handleSignMsg}>Sign msg</button>
//         <button onClick={handleSendTx}>Send tx</button>
//         <button onClick={handleGetBalance}>Get Balance</button>
//       </div>
//     )
//   );
// };
