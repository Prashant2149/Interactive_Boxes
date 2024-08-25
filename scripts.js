document.addEventListener('DOMContentLoaded', function() {
    const bundleOptions = document.querySelectorAll('input[name="bundle"]');

    bundleOptions.forEach(option => {
        option.addEventListener('change', function() {
            bundleOptions.forEach(opt => {
                opt.closest('.option').classList.remove('active');
                opt.closest('.option').querySelector('.selection').style.display = 'none';
            });

            const selectedOption = this.closest('.option');
            selectedOption.classList.add('active');
            selectedOption.querySelector('.selection').style.display = 'flex';
        });
    });
});

function addToCart() {
    console.log("Button was clicked, and the function was called.");
}
document.getElementById('addToCartBtn').addEventListener('click', addToCart);