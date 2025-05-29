// import { createAppKit } from "@reown/appkit/react";

// import { WagmiProvider } from "wagmi";
// // import { useState } from "react";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ActionButtonList } from "./AppkitActionButton.jsx";
// import { SmartContractActionButtonList } from "./SmartContractActionButtonList.jsx";
// import { InfoList } from "./InfoList";
// import {
//   projectId,
//   metadata,
//   networks,
//   wagmiAdapter,
// } from "../config/appkit.jsx";

// const queryClient = new QueryClient();

// const generalConfig = {
//   projectId,
//   networks,
//   metadata,
//   themeMode: "light",
//   themeVariables: {
//     "--w3m-accent": "#000000",
//   },
// };

// // Create modal
// createAppKit({
//   adapters: [wagmiAdapter],
//   ...generalConfig,  features: {
//     analytics: true,
//   },
// });

// export function SignAction() {
//   // const [transactionHash, setTransactionHash] = useState(undefined);
//   // const [signedMsg, setSignedMsg] = useState("");
//   // const [balance, setBalance] = useState("");

//   // const receiveHash = (hash) => {
//   //   setTransactionHash(hash);
//   // };

//   // const receiveSignedMsg = (signedMsg) => {
//   //   setSignedMsg(signedMsg);
//   // };

//   // const receiveBalance = (balance) => {
//   //   setBalance(balance);
//   // };

//   return (
//     <div>
//       {/* <span>
//         Connect Wallet <i className="far fa-arrow-right" />
//       </span> */}
//       {/* <img
//         src="/reown.svg"
//         alt="Reown"
//         style={{ width: "150px", height: "150px" }}
//       />
//       <h1>AppKit Wagmi React dApp Example</h1> */}
//       <WagmiProvider config={wagmiAdapter.wagmiConfig}>
//         <QueryClientProvider client={queryClient}>
//           <span className="main-btn nav-btn d-none d-sm-inline-block">
//             Connect Wallet <i className="far fa-arrow-right" />
//           </span>
//           <appkit-button onClick={() => console.log("click")} />

//           {/* <ActionButtonList
//             sendHash={receiveHash}
//             sendSignMsg={receiveSignedMsg}
//             sendBalance={receiveBalance}
//           /> */}
//           {/* <SmartContractActionButtonList /> */}
//           {/* <div className="advice">
//             <p>
//               This projectId only works on localhost. <br />
//               Go to{" "}
//               <a
//                 href="https://cloud.reown.com"
//                 target="_blank"
//                 className="link-button"
//                 rel="noopener noreferrer"
//               >
//                 Reown Cloud
//               </a>{" "}
//               to get your own.
//             </p>
//           </div> */}
//           {/* <InfoList
//             hash={transactionHash}
//             signedMsg={signedMsg}
//             balance={balance}
//           /> */}
//         </QueryClientProvider>
//       </WagmiProvider>
//     </div>
//   );
// }

// export default SignAction;
