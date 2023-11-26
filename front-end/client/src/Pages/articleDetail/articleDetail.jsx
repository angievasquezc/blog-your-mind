

export const ArticleDetail= ()=>{

    return (
        <div>
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                    <article className=" mx-auto gap-y-5 border-t  sm:mt-16 sm:pt-16  ">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Akashi_Bridge.JPG/1024px-Akashi_Bridge.JPG"></img>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs">
                            <time className="text-gray-500">
                            post date
                            </time>
                            <select className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100" name="" id="">
                                <option value="">post category</option>
                            </select>
                   
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href="link">
                                <span className="absolute inset-0" />
                                post title
                            </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">post description
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                            </p>
                        </div>

                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src="https://cdn.pixabay.com/photo/2021/12/14/23/11/woman-6871495_1280.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href="author profile">
                                <span className="absolute inset-0" />
                                author name
                                </a>
                            </p>
                            <p className="text-gray-600">author rol</p>
                            </div>
                        </div>
                    </article>
                </section>
        </div>
    )
}