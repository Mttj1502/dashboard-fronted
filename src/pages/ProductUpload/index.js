import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from '@mui/material/Button';


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


const ProductUpload = () =>{

    const [categoryVal, setcategoryVal] = useState('');
    const [ratingsValue, setRatingValue] = useState(1);

    const handleChangeCategory = (event) =>{
        setAge(event.target.value);
    };


    return(
        <>
        <div className="right-content w-100">
             <div className="card shadow border-0 w-100 flex-row p-4">
                                <h5 className="mb-0">Product Upload</h5>
                                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                                    <StyledBreadcrumb
                                        component="a"
                                        href="#"
                                        label="Dashboard"
                                        icon={<HomeIcon fontSize="small" />}
                                    />
            
                                    <StyledBreadcrumb
                                        components="a"
                                        label="Products"
                                        href="#"
                                        deleteIcon={<ExpandMoreIcon />}
            
                                    />

                                     <StyledBreadcrumb
                                        label="Product Upload"
                                        deleteIcon={<ExpandMoreIcon />}
            
                                    />
                                </Breadcrumbs>
        </div>

        <form className='form' onSubmit={submitForm}>
            <div className='row'>
            <div className='col-sm-9'>
                <div className='card p-4'>
                    <h5 className='mb-4'>Basic Information</h5>

                    <div className='form-group'>
                        <h6>PRODUCT NAME</h6>
                        <input type='text' name="name"/>
                    </div>

                      <div className='form-group'>
                        <h6>DESCRIPTION</h6>
                        <textarea rows={5}/>
                    </div>

                    <div className='row'>
                        <div className='col'>
                        <div className='form-group'>
                            <h6>CATEGORY</h6>
                             <Select
                                value={categoryVal}
                                onChange={handleChangeCategory}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label'}}
                                className='w-100'
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </div>
                        </div>

                         <div className='col'>
                            <div className='form-group'>
                            <h6>BRAND</h6>
                             <Select
                                value={categoryVal}
                                onChange={handleChangeCategory}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label'}}
                                className='w-100'
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem className='text-capitalize'>Men</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className='form-group'>
                                <h6>RATINGS</h6>
                                 <Rating
                                    name="simple-controlled"
                                    value={ratingsValue}
                                    onChange={(event, newValue) => {
                                    setRatingValue(newValue);
                                    }}
                                />
                            </div>
                        </div>

                         <div className='col'>
                            <div className='form-group'>
                                <h6>PRODUCT STOCK</h6>
                                <input type='text' name="countInStock"/>
                            </div>
                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-md-4'>
                            <div className='form-group'>
                                <h6>BRAND</h6>
                                <input type='text' name='brand'/>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='form-group'>
                                <h6>DISCOUNT</h6>
                                <input type='text' name="discount"/>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='form-group'>
                                <h6>PRODUCT RAMS</h6>
                                <Select>

                                </Select>

                            </div>
                        </div>

                    </div>

                   <br/>

                   <Button className="btn-blue btn-lg btn-big"><FaCloudUploadAlt/>&nbsp; PUBLISH AND VIEW</Button>
                       
                    



                </div>
            </div>

            
        </div>


        </form>

    </div>
        </>
    )
}

export default ProductUpload;