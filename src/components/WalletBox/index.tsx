import React, {useMemo} from 'react';

import dolar from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';


interface IWalletBoxProps {
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string; 
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon, color
}) => {

    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return dolar;
            case 'arrowUp':
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg
            default:
                return undefined;
                
        }
    },[icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>{amount}</h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    )
}

export default WalletBox;