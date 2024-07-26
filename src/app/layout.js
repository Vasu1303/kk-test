import './globals.css'
import { Josefin_Sans, Rubik } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import AuthProvider from '@/providers/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 



const josefin_Sans = Josefin_Sans({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Kritagya Khanna',
  description: '',
}

export default function RootLayout({ children }) {
  return (    
    <html lang="en">
      <body className={josefin_Sans.className}>
       


        
         <div className='container'>
              <div className='wrapper'>
                <Navbar/>
                 {children}
                 <ToastContainer/>
                <Footer/>
               </div>
          </div> 

        



        

            

       


       
        
       
        
        </body>
    </html>
  );
};
