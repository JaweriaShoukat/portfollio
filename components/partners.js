import Image from 'next/image';
import Partner1 from '../public/images/1.png';
import Partner2 from '../public/images/2.png';

export default function Partners() {
    return (
        <div>
            <table className="border-collapse border border-neutral-400 w-full">
                <tbody className='w-full'>
                    <tr>
                        <td className="opacity-50 hover:opacity-100 transition-all border border-slate-300">
                            <figure className='w-full h-[130px] flex items-center justify-center'>
                                <Image src={Partner1} alt=''></Image>
                            </figure>
                        </td>
                        <td className="opacity-50 hover:opacity-100 transition-all border border-slate-300">
                            <figure className='w-full h-[130px] flex items-center justify-center'>
                                <Image src={Partner1} alt=''></Image>
                            </figure>
                        </td>
                        <td className="opacity-50 hover:opacity-100 transition-all border border-slate-300">
                            <figure className='w-full h-[130px] flex items-center justify-center'>
                                <Image src={Partner1} alt=''></Image>
                            </figure>
                        </td>
                        <td className="opacity-50 hover:opacity-100 transition-all border border-slate-300">
                            <figure className='w-full h-[130px] flex items-center justify-center'>
                                <Image src={Partner1} alt=''></Image>
                            </figure>
                        </td>
                    </tr>
                    <tr>
                        <td className="opacity-50 hover:opacity-100 transition-all border border-slate-300">
                            <figure className='w-full h-[130px] flex items-center justify-center'>
                                <Image src={Partner1} alt=''></Image>
                            </figure>
                        </td>
                        <td className="opacity-50 hover:opacity-100 transition-all border border-slate-300">
                            <figure className='w-full h-[130px] flex items-center justify-center'>
                                <Image src={Partner1} alt=''></Image>
                            </figure>
                        </td>
                        <td className="opacity-50 hover:opacity-100 transition-all border border-slate-300">
                            <figure className='w-full h-[130px] flex items-center justify-center'>
                                <Image src={Partner1} alt=''></Image>
                            </figure>
                        </td>
                        <td className="opacity-50 hover:opacity-100 transition-all border border-slate-300">
                            <figure className='w-full h-[130px] flex items-center justify-center'>
                                <Image src={Partner1} alt=''></Image>
                            </figure>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
