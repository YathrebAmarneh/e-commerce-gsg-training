import style from './style.module.css'

const Banner2 = () => {
    return (
        <div className={style.container}>
            <img src='assets/images/2f68621bf6370364b2ffa24e34ee8d5b7fd68f47.png' />
            <p className={style.p1}>I have taste grilled meats around the world. Before i will guide you to
                the various technologies (gas barbecues, charcoal barbecues, Mongolian,
                sauces, recipes ) i will
                tell you about the Greek way.
            </p>

            <p className={style.p2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
            </p>
        </div>
    )
}

export default Banner2