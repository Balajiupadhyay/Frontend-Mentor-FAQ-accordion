var buttons = document.querySelectorAll('.btn');
// Attach click event listeners to each button
buttons.forEach(function (button) 
{
    button.addEventListener('click', function () 
    {
        // Hide all divs with the class 'show-div'
        var img = this.querySelector('.btn-icon');
        // Get the target div ID from the 'data-target' attribute
        var targetDivId = this.getAttribute('data-target');
        // Show the selected div
        var targetDiv =  document.getElementById(targetDivId);
        if (targetDiv.style.display === 'none' || targetDiv.style.display === '') 
        {
            targetDiv.style.display = 'block';
            img.src = 'icon-minus.svg'
        } 
        else 
        {
            targetDiv.style.display = 'none';
            img.src = 'icon-plus.svg'
        }
    });
}); 
    
// var buttons = document.querySelectorAll('.btn');

// buttons.forEach(function(button)
// {
//     button.addEventListener('click', function()
//     {
//         var targetDivId = this.getAttribute('data-target');
//         var targetDiv = document.getElementById(targetDivId);
//         var img = this.querySelector('.btn-icon');
//         if(targetDiv.style.display === 'none' || targetDiv.style.display === '')
//         {
//             targetDiv.style.display = 'block';
//             img.src = 'assets/images/icon-minus.svg';
//         }
//         else
//         {
//             targetDiv.style.display = 'none';
//             img.src = 'assets/images/icon-plus.svg';
//         }
//     })
// })