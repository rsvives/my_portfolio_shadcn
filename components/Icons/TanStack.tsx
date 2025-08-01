import Image from "next/image"

type Props = {
    width: number,
    height: number
}

export const TanStack = (props: Props) => {
    return (

        <Image width={props.width} height={props.height} alt="TanStack Logo" src={'/logos/tanstack.png'}></Image>
    )
}