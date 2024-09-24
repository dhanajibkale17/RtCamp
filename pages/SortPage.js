exports.SortPage= class SortPage
{
    constructor(page){
        this.page=page;        
        //this.product_sort_container="//option[@value='za']"; 
        
    }
  
    
    async productsortcontainer()
    {

        // Wait for page to load
       await page.waitForSelector('.inventory_list');

      // Scenario 1: Verify sorting order displayed for Z-A on the “All Items” page.
      // Click on the sorting dropdown and choose Z-A
      await page.click('.product_sort_container');
      await page.selectOption('.product_sort_container', 'za');

      // Collect the names of the items and validate the Z-A order
      const productNamesZA = await page.$$eval('.inventory_item_name', items => items.map(item => item.textContent));
      const isSortedZA = [...productNamesZA].sort((a, b) => b.localeCompare(a)).every((val, index) => val === productNamesZA[index]);

        console.log("Is Z-A order correct:", isSortedZA ? "Yes" : "No");
       
       }

}