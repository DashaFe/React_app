const Calculation = (res, val1, val2, val3, val4) => {
    
    let result=0.0;
    let r=8.31;

    if(res=='P' || res=='V'|| res=='M')
    {
        result=val2*val4*r/val1/val3;
    }
    else if(res=='m')
    {
        result=val1*val2*val3/r/val4;
    }
    else
    {
        result=val1*val4*val3/r/val2;
    }
    return (result);
};

export default Calculation;