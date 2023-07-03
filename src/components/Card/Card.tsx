import {FC, ReactNode,} from "react";
import './Card.css'

type Props = {
    children: ReactNode;
    className: string
}

const Card: FC<Props> = ({children, className}) => (
    <div className={`card ${className}`}>{children}</div>
)

export default Card
