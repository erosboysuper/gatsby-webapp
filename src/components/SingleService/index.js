import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import styles from './index.module.css'

const SingleService = ({ info }) => {
    const [showInfo, setInfo] = useState(false)

    const toggleInfo = () => {
        setInfo(showInfo => !showInfo);
    }

    return (
        <article className={styles.singleService}>
            <h4>
                { }
                <button className={styles.btn} onClick={toggleInfo}>
                    <FaAngleDown />
                </button>
            </h4>
            { showInfo && <p>{info}</p>}
        </article>
    )
}

export default SingleService
