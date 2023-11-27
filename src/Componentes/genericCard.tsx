import styles from "@/styles/Home.module.css"

type GenericCardProps = React.PropsWithChildren<{
    título: string;

}>

export default function GenericCard({título, children}: GenericCardProps){
    return(
        <div>
            <header>{título}</header>
            <div>{children}</div>
        </div>
    )
}