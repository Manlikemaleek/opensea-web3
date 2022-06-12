import React from 'react'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/57-R9FTB4lvfv8-vWQ3JqxCEUMNuR1S1g6gjQQl2xIRFDWMPggW_hEbUOWumUTwbkgc_cM5MP86tFxpqT8L3igDTanOvJPjxPEU6=h200')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () => {
  return (
    <div className={style.wrapper}>
        <div children={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Collect, Discover, and sell Amazing NFTs
                    </div>
                    <div className={style.description}>
                        This is the world&apos;s largest NFT marketplace
                    </div>
                    <div className={style.container}>
                        <button className={style.accentedButton}>Explore</button>
                        <button className={style.button}>Create</button>
                    </div>
                </div>
                <div className={style.cardContainer}>
                    <img className="rounded-t-lg" src='https://lh3.googleusercontent.com/57-R9FTB4lvfv8-vWQ3JqxCEUMNuR1S1g6gjQQl2xIRFDWMPggW_hEbUOWumUTwbkgc_cM5MP86tFxpqT8L3igDTanOvJPjxPEU6=h200' alt="" />
                    <div className={style.infoContainer}>
                        <img 
                        className="h-[2.25rem] rounded-full"
                        src='https://lh3.googleusercontent.com/y-CC97n-cZs6Usu1S7KkTp1QYJWMPYGjofoAu-Q4MpQckRVeVr0BdLF919--z0r582K7tqY84ifHd5vTzoN0YQ7xlEP9xdp6sySo=w300'
                         alt=""
                          />

                          <div className={style.author}>
                              <div className={style.name}>Gators</div>
                              <a 
                              className='text-[#1868b7]'
                              href="https://lh3.googleusercontent.com/lc4XyEUsP_wS5KrHCtTNxVSJmWaZwtknyUVzuHRMQ2r260S_VBLm3gcQD7XcAXL1Yh5DSDIRaIk6KyQiwBBJW2o0nc1ZKBQMdWnG=w300">
                                  Ganja Gators
                              </a>
                          </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )}
export default Hero 