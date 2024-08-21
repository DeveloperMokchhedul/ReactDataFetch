import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

function Navbar() {
    const [profile, setProfile] = useState(false)
    const [menu, setMenu] = useState(false)



    return (
        <>
            <div className="bg-slate-200">
                <header className="container mx-auto flex justify-between px-10 items-center py-5  relative">
                    <Link to={"/"}><h1 className="text-3xl">Logo</h1></Link>
                    <div>
                        <ul className="hidden md:flex gap-8 text-2xl ">
                            <Link to="/">Home</Link>
                            <Link to="/collection">Collection</Link>
                            <Link to="/about">About</Link>
                            <Link to="/product">Contact</Link>
                        </ul>
                    </div>
                    <div className="flex text-2xl gap-8 ">
                        <div>
                            {/* <input type="text" /> */}
                            <CiSearch />
                        </div>
                        <div className="relative ">
                            {/* <input type="text" /> */}
                            <CgProfile onClick={() => setProfile(!profile)} />
                            {
                                profile && <div className="flex flex-col absolute text-sm bg-red-100 p-2 rounded-lg gap-1 top-12 -left-10">
                                    <p onClick={()=>setProfile(false)} className="cursor-pointer text-2xl hover:text-3xl hover:text-slate-400">MyProfile</p>
                                    <p onClick={()=>setProfile(false)} className="cursor-pointer text-2xl hover:text-3xl hover:text-slate-400">Orders</p>
                                    <p onClick={()=>setProfile(false)} className="cursor-pointer text-2xl hover:text-3xl hover:text-slate-400">LogOut</p>
                                </div>
                            }
                        </div>
                        <div>
                            {/* <input type="text" /> */}
                            <LuShoppingCart />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <CiMenuFries onClick={() => setMenu(!menu)} />
                        {
                            menu && <div className="absolute right-[30%] 20 top-28 ">
                                <ul className="flex flex-col gap-6">
                                    <Link onClick={()=>setMenu(false)} className="bg-emerald-400 px-10 py-1 text-white rounded-lg hover:bg-emerald-500" to={"/"}>Home</Link>
                                    <Link onClick={()=>setMenu(false)} className="bg-emerald-400 px-10 py-1 text-white rounded-lg hover:bg-emerald-500" to={"/collection"}>Collection</Link>
                                    <Link onClick={()=>setMenu(false)} className="bg-emerald-400 px-10 py-1 text-white rounded-lg hover:bg-emerald-500" to={"/about"}>About</Link>
                                    <Link onClick={()=>setMenu(false)} className="bg-emerald-400 px-10 py-1 text-white rounded-lg hover:bg-emerald-500" to={"/contact"}>Contact</Link>
                                </ul>
                            </div>
                        }

                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar
