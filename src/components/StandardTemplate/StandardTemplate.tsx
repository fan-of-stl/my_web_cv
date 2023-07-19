import React from 'react'
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import styles from "./StandardTemplate.module.css";

function StandardTemplate({data}:any) {
    const items : any[]= [];
    Object.keys(data).forEach((heading: string) => {
        if(heading !== "resumeConfig" && heading !== "personalDetails"){
            items.push({label : heading})
        }

    });
    

    const start = <p className={styles.heading}>{data.personalDetails.username}</p>;
  return ( <Menubar model={items} start={start} />
  )
}

export default StandardTemplate