import React from "react";
import TradeCard from "./TradeCard";
import BigNumberPlainText from "../common/BigNumberPlainText";
import { DollarPool } from "../../constants/contracts";
import { ESD, ESDS, UNI } from "../../constants/tokens";
import styles from "./index.module.scss";
import BigNumber from "bignumber.js";
type TradeProps = {
  pairBalanceUSDC: BigNumber;
  pairBalanceESD: BigNumber;
};
const setUserFormat = (str: string) => {
  let substr = str.substring(0, 6) + "......" + str.substring(32);
  return substr;
};

function Trade({ pairBalanceUSDC, pairBalanceESD }: TradeProps) {
  const info = "https://info.uniswap.org/pair/" + UNI.addr;
  const trade =
    "https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=" +
    ESD.addr;
  const supply =
    "https://app.uniswap.org/#/add/" +
    ESD.addr +
    "/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
  const u8d = "http://etherscan.io/address/" + ESD.addr;
  const dao = "http://etherscan.io/address/" + ESDS.addr;
  const lp = "http://etherscan.io/address/" + DollarPool;
  const uniswap = "http://etherscan.io/address/" + UNI.addr;
  return (
    <div className={styles.main}>
      <div className={styles.trade}>
        <p>Trade</p>
        <div className={styles.tradeInfo}>
          <div className={styles.tradeInfoCard}>
            <div className={styles.title}>UAD Price</div>
            <div className={styles.content}>
              <BigNumberPlainText
                asset="$"
                balance={pairBalanceUSDC.dividedBy(pairBalanceESD)}
                suffix=""
              />
            </div>
          </div>

          <div className={styles.tradeInfoCard}>
            <div className={styles.title}>UAD Liquidity</div>
            <div className={styles.content}>
              <BigNumberPlainText
                asset=""
                balance={pairBalanceESD}
                suffix=" UAD"
              />
            </div>
          </div>

          <div className={styles.tradeInfoCard}>
            <div className={styles.title}>USDC Liquidity</div>
            <div className={styles.content}>
              <BigNumberPlainText
                asset="$"
                balance={pairBalanceUSDC}
                suffix=""
              />
            </div>
          </div>
        </div>
      </div>
      <TradeCard href={info} bgColor="#FEB258">
        <p className={styles.tradeCard}>Info</p>
      </TradeCard>

      <TradeCard href={trade} bgColor="#FC9D46">
        <p className={styles.tradeCard}>Trade</p>
      </TradeCard>

      <TradeCard href={supply} bgColor="#FB923E">
        <p className={styles.tradeCard}>Supply</p>
      </TradeCard>

      <div className={styles.clearBoth}></div>

      <div className={styles.contractAddress}>
        <p>Contract Addresses</p>
      </div>

      <TradeCard href={u8d} bgColor="#CACACA">
        <div className={styles.contractCard}>
          <p>UAD Token</p>
          <p>{setUserFormat(ESD.addr)}</p>
        </div>
      </TradeCard>

      <TradeCard href={dao} bgColor="#BCBCBC">
        <div className={styles.contractCard}>
          <p>DAO</p>
          <p>{setUserFormat(ESDS.addr)}</p>
        </div>
      </TradeCard>

      <TradeCard href={lp} bgColor="#9A9A9A">
        <div className={styles.contractCard}>
          <p>LP Bonding</p>
          <p>{setUserFormat(DollarPool)}</p>
        </div>
      </TradeCard>

      <TradeCard href={uniswap} bgColor="#878787">
        <div className={styles.contractCard}>
          <p>Uniswap LP</p>
          <p>{setUserFormat(UNI.addr)}</p>
        </div>
      </TradeCard>
    </div>
  );
}

export default Trade;
