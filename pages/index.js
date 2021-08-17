import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from "../components/main/main";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
     <Main/>
    </div>
  )
}
