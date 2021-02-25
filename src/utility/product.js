export var categorizedProducts = (productsArr)=>{
    var categoryName;
    var isCategoryExist;
    var newCategory;
 //initialize category array
 var categories=[]
 //loop for products
 for(var product of productsArr)
 {
     categoryName=product.category;
    isCategoryExist=categories.some((categoryObj)=>categoryObj.category===categoryName)

    if(isCategoryExist)
    {
        categories=categories.map((categoryObj)=>{
            if(categoryObj.category === categoryName)
            {
               
        //categoryObj k andr do cheezen hain. 1)category 2)products => humy products k andr product ko dalna hy
                categoryObj.products.push(product)
        //or jb return kraenge to modified wala categoryObj ayega jisme more than one products honge
        //or return ki wajah se wo upar categories me save hojaega        
                return categoryObj
            }
            else{
                return categoryObj
            }
        })
    }
    else{
     newCategory={
            category:product.category,
            products:[product]
        }
        categories.push(newCategory)
    }

 }
 return categories

}

export var productAdditionInCart =(existingProducts, upcomingProduct)=>{
    var exist=existingProducts.some((existingProduct)=> existingProduct.id === upcomingProduct.id);
    if(!exist)
    {
        return[...existingProducts,{...upcomingProduct,quantity:1}]
    }
    else{
        return existingProducts.map((existingProduct)=>{
            if(existingProduct.id === upcomingProduct.id)
            {
                return{
                    ...existingProduct,
                    quantity: existingProduct.quantity+1
                }
            }
            else{
                return existingProduct
            }
        })
    }

}

export var productRemoveFromCart=(existingProducts,upcomingProductId)=>{
    var product=existingProducts.find((existingProduct)=> existingProduct.id === upcomingProductId);
    if(product)
    {

    
    if(product.quantity>0)
    {
        return existingProducts.map((existingProduct)=>{
            if(existingProduct.id === upcomingProductId)
            {
                return{
                    ...existingProduct,
                    quantity:existingProduct.quantity-1
                }
                
            }
            else{
                return existingProduct
            }
        })
    }
    else{
        return existingProducts.filter((existingProduct)=>
            existingProduct.id !== upcomingProductId
        );
    }
}
else{
    return existingProducts
}

}