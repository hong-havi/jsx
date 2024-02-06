'use strict';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './item';

import './../../scss/products/list.scss';

export default function List(){

    let [datas, setDatas] = useState([]);

    useEffect(() => {
        axios.get('./data.json').then((result) => {
            setDatas(result.data)
        })
    }, [])

    return (
      <>
        {
            datas.map((data) => {
            return(
                <div className="list" key="{ data.name }">1
                    <Item data={ data }></Item>
                </div>
            )
            })
        }
      </>
    );
}