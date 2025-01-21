
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-top scroll-to-target" href="#top">
                    <i className="flaticon-up-arrow"></i>
                </a>
                
            )}
        </>
    )
}