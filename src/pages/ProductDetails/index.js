import React, { useRef } from "react";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

import LinearProgress from '@mui/material/LinearProgress';

import Slider from "react-slick";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import Rating from '@mui/material/Rating';
import { Button } from "bootstrap";
import { FaReply } from "react-icons/fa";





//breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

const ProductDetails = ()=>{

    const productSliderBig = useRef();

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false
    };

    const goToSlide=(index)=>{
        productSliderBig.current.slickGoTo(index);
        productSliderSml.current.slickGoTo(index);

    }

     var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
         arrows: false
    };

    return(
        <>
        <div className="right-content w-100">
             <div className="card shadow border-0 w-100 flex-row p-4">
                                <h5 className="mb-0">Product View</h5>
                                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                                    <StyledBreadcrumb
                                        component="a"
                                        href="#"
                                        label="Dashboard"
                                        icon={<HomeIcon fontSize="small" />}
                                    />
            
                                    <StyledBreadcrumb
                                        label="Products"
                                        component="a"
                                         href="#"
            
                                    />

                                     <StyledBreadcrumb
                                        label="Product View"
            
                                    />
                                </Breadcrumbs>
                            </div>

                        <div className='card productDetailsSEction'>
                         <div className='row'>
                            <div className='col-md-5'>
                                <div className="slideWrapper pt-3 pb-3 pl-4 pr-4">
                                    <h6 className="mb-4">Product Gallery</h6>
                                    <Slider {...productSliderOptions} ref={productSliderBig} className="sliderBig mb-2">
                                    <div className="item" onClick={()=>goToSlide(1)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className="w-100"/>
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(2)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" className="w-100"/>
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(3)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" className="w-100"/>
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(4)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" className="w-100"/>
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(5)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp" className="w-100"/>
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(6)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/06.webp" className="w-100"/>
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(7)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/07.webp" className="w-100"/>
                                    </div>
                                    <div className="item" onClick={()=>goToSlide(8)}>
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/08.webp" className="w-100"/>
                                    </div>
                                </Slider>
                                  <Slider {...productSliderSmlOptions} ref={productSliderSml} className="sliderSml">
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" className="w-100"/>
                                    </div>
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" className="w-100"/>
                                    </div>
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" className="w-100"/>
                                    </div>
                                    <div className="item">
                                        <img src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp" className="w-100"/>
                                    </div>
                                </Slider>
                                </div>
                            </div>

                            <div className='col-md-7'> 
                                <div className="pt-3 pb-3 pl-4 pr-4">
                                     <h6 className="mb-4">Product Details</h6>

                                     <h4>Formal suits for men wedding slim fit 3 piece dress 
                                         business party jacket</h4>

                                    <div className="productInfo mt-3">
                                        <div className="row mb-2">
                                            <div className="col-sm-3 d-flex align-items-center"> 
                                                <span className="icon"><MdBrandingWatermark/></span>
                                                <span className="icon">Brand</span>
                                            </div>

                                            <div className="col-sm-9"> 

                                             :   <span>Ecstasy</span>
                                            </div>
                                        </div>

                                         <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center"> 
                                                <span className="icon"><BiSolidCategoryAlt/></span>
                                                <span className="icon">Category</span>
                                            </div>

                                            <div className="col-sm-7"> 

                                                : <span>
                                                    <ul className="list list-inline tags sml">
                                                        <li className="list-inline-item">
                                                            <span>SUITE</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>PARTY</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>PARTY</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>DRESS</span>
                                                        </li>
                                                         <li className="list-inline-item">
                                                            <span>SMART</span>
                                                        </li>
                                                         <li className="list-inline-item">
                                                            <span>MAN</span>
                                                        </li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>

                                        
                                         <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center"> 
                                                <span className="icon"><BiSolidCategoryAlt/></span>
                                                <span className="icon">Tags</span>
                                            </div>

                                            <div className="col-sm-7"> 
                                              :  <span> <ul className="list list-inline tags sml">
                                                        <li className="list-inline-item">
                                                            <span>RED</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>BLUE</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span>WHITE</span>
                                                        </li>
                                                    </ul>
                                                    </span>
                                            </div>
                                        </div>

                                        
                                         <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center"> 
                                                <span className="icon"><BiSolidCategoryAlt/></span>
                                                <span className="icon">Color</span>
                                            </div>

                                            <div className="col-sm-7"> 
                                                <span>Man's</span>
                                            </div>
                                        </div>

                                        
                                         <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center"> 
                                                <span className="icon"><BiSolidCategoryAlt/></span>
                                                <span className="icon">Size</span>
                                            </div>

                                            <div className="col-sm-7"> 
                                                <span>(68) Piece</span>
                                            </div>
                                        </div>

                                        
                                         <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center"> 
                                                <span className="icon"><BiSolidCategoryAlt/></span>
                                                <span className="icon">Price</span>
                                            </div>

                                            <div className="col-sm-7"> 
                                                <span>Man's</span>
                                            </div>
                                        </div>

                                        
                                         <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center"> 
                                                <span className="icon"><BiSolidCategoryAlt/></span>
                                                <span className="icon">Stock</span>
                                            </div>

                                            <div className="col-sm-7"> 
                                                <span>Man's</span>
                                            </div>
                                        </div>

                                        
                                         <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center"> 
                                                <span className="icon"><BiSolidCategoryAlt/></span>
                                                <span className="icon">Review</span>
                                            </div>

                                            <div className="col-sm-7"> 
                                                <span>Man's</span>
                                            </div>
                                        </div>

                                         <div className="row">
                                            <div className="col-sm-5 d-flex align-items-center"> 
                                                <span className="icon"><BiSolidCategoryAlt/></span>
                                                <span className="icon">Published</span>
                                            </div>

                                            <div className="col-sm-7"> 
                                                <span>Man's</span>
                                            </div>
                                        </div>

                                    </div>
                                </div> 
                            </div>
                          </div>  

                        <div className="p-4">
                        <h6 className="mt-4 mb-3">Product Description</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <br/>

                        <h6 className="mt-4 mb-4">Rating Analytics</h6>

                        <div className="ratingSection">
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    5 Star
                                </span>

                                <div className="col2"> 
                                 <div className="progress">
                                <div className="progress-bar" style={{width: '70%'}}></div>
                                </div>
                                </div>

                                <span className="col3">
                                    (22)
                                </span>
                            </div>

                             <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    4 Star
                                </span>

                                <div className="col2"> 
                                 <div className="progress">
                                <div className="progress-bar" style={{width: '50%'}}></div>
                                </div>
                                </div>

                                <span className="col3">
                                    (22)
                                </span>
                            </div>

                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    3 Star
                                </span>

                                <div className="col2"> 
                                 <div className="progress">
                                <div className="progress-bar" style={{width: '20%'}}></div>
                                </div>
                                </div>

                                <span className="col3">
                                    (22)
                                </span>
                            </div>

                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    2 Star
                                </span>

                                <div className="col2"> 
                                 <div className="progress">
                                <div className="progress-bar" style={{width: '20%'}}></div>
                                </div>
                                </div>

                                <span className="col3">
                                    (22)
                                </span>
                            </div>

                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    1 Star
                                </span>

                                <div className="col2"> 
                                 <div className="progress">
                                <div className="progress-bar" style={{width: '10%'}}></div>
                                </div>
                                </div>

                                <span className="col3">
                                    (22)
                                </span>
                            </div>

                        </div>

                        <br/>

                        <h6 className="mt-4 mb-4">Customer_reviews</h6>

                        <div className="reviewsSecrion">
                            <div className="reviewsRow">
                                <div className="row">
                                <div className="col-sm-7 d-flex">
                                    <div className="d-flex  flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                        <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" lg={true}/>

                                        <div className="info pl-3">
                                            <h6>Miron Mahmud</h6>
                                            <span>25 minutes ago!</span>
                                        </div>

                                        </div>  

                                         <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                    </div>     
                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                          <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/>&nbsp;Reply</Button>    
                                        </div>  
                                    </div>

                                    <p className="mt-3">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>

                                    
                                </div>
                            </div>


                            <div className="reviewsRow reply">
                                <div className="row">
                                <div className="col-sm-7 d-flex">
                                    <div className="d-flex  flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                        <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" lg={true}/>

                                        <div className="info pl-3">
                                            <h6>Miron Mahmud</h6>
                                            <span>25 minutes ago!</span>
                                        </div>

                                        </div>  

                                         <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                    </div>     
                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                          <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/>&nbsp;Reply</Button>    
                                        </div>  
                                    </div>

                                    <p className="mt-3">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>

                                    
                                </div>
                            </div>

                             <div className="reviewsRow reply">
                                <div className="row">
                                <div className="col-sm-7 d-flex">
                                    <div className="d-flex  flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                        <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" lg={true}/>

                                        <div className="info pl-3">
                                            <h6>Miron Mahmud</h6>
                                            <span>25 minutes ago!</span>
                                        </div>

                                        </div>  

                                         <Rating name="read-only" value={4.5} precision={0.5} readOnly />


                                    </div>     
                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ml-auto">
                                          <Button className="btn-blue btn-big btn-lg ml-auto"><FaReply/>&nbsp;Reply</Button>    
                                        </div>  
                                    </div>

                                    <p className="mt-3">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>

                                    
                                </div>
                            </div>

                             <div className="reviewsRow reply">
                                <div className="row">
                                <div className="col-sm-7 d-flex">
                                    <div className="d-flex  flex-column">
                                        <div className="userInfo d-flex align-items-center mb-3">
                                        <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" lg={true}/>

                                        <div className="info pl-3">
                                            <h6>Miron Mahmud</h6>
                                            <span>25 minutes ago!</span>
                                        </div>

                                        </div>  

                                         <Rating name="read-only" value={4.5} precision={0.5} readOnly />

                                         <Button className="btn-blue btn-lg ml-auto">Reply</Button>


                                    </div>     

                                     <p className="mt-3">
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>

                     <h6 className="mt-4">Review Reply Form</h6>

                     <form className="reviewForm">
                        <texttarea placeholder="write here mb-4">
                        </texttarea>

                        <Button className="btn-blue btn-big btn-lg w-100 mt-4">drop your replies</Button>
                     </form>

                       

                        


                        </div>

                        </div>  

                    </div>

             
        </>
    )
}

export default ProductDetails;