export default function Experiencia() {

    return (
        <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl">
            <Item principal="+2" label="anos de experiência" />
            <Item principal="+10" label="projetos feitos" />
        </div>
    )
}

function Item(props: { principal: string, label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    )
}