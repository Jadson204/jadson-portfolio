export default function MiniCV() {
    return (
        <div className="flex flex-1 flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
            {/* <div className="relative min-w-72 h-64 xl:self-end self-center">
                <Image src="/minha-foto.png" alt="Foto de perfil" fill />
            </div> */}
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span className="
                        bg-gradient-to-r from-red-500 via-white to-white
                        text-transparent bg-clip-text text-2xl font-bold
                    ">Jadson Henrique</span>
                    <span>Desenvolvedor Backend</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione cumque possimus autem dolor laboriosam? Incidunt praesentium deserunt, commodi laborum id ipsum dignissimos nobis. Adipisci distinctio earum quos, est reprehenderit sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam non odit doloribus expedita temporibus tenetur perferendis, incidunt placeat consequatur eaque voluptates. Vero, et accusamus. Ipsum iure optio laborum doloribus ullam.
                </p>
            </div>
        </div>
    )
}