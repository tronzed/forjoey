export default function Loader({status}) {

    if(!status){
        return null;
    }

    return(
        <>
        
            <div className="loader_cover"> 
                <div className="loader_inner_box">
                    Loading...
                </div>
            </div>
        
        </>
    );

} 