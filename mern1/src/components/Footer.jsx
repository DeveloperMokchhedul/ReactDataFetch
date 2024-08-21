
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container mx-auto grid grid-cols-12 my-10 gap-y-5 md:gap-10 text-center'>
                <div className='col-span-12 md:col-span-4'>
                    <h1 className='text-5xl pb-5'>Logo</h1>
                    <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero voluptatibus, dolorem repudiandae officia laborum maxime aliquid laboriosam perspiciatis? Dolores recusandae quasi quis ipsa sed, vitae eius eligendi eveniet.</p>

                </div>

                <div className='col-span-12 md:col-span-4'>
                    <h1 className='text-5xl pb-5'>COMPANY</h1>
                    <div>
                        <ul className='flex flex-col gap-3 '>
                            <Link>Home</Link>
                            <Link>About us</Link>
                            <Link>Delivery</Link>
                            <Link>Privecy Policy</Link>
                        </ul>
                    </div>


                </div>

                <div className='col-span-12 md:col-span-4'>
                    <h1 className='text-5xl pb-5'>COMPANY</h1>
                    <div>
                        <ul className='flex flex-col  '>
                            <Link>+1-212-456-7890</Link>
                            <Link>contact@foreverou.com</Link>

                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer
