const items = document.querySelectorAll('.item');
const totalPriceElement = document.getElementById('total-price');

items.forEach(item => {
    const quantityElement = item.querySelector('.quantity');
    const minusButton = item.querySelector('.minus');
    const plusButton = item.querySelector('.plus');
    const deleteButton = item.querySelector('.delete-btn');
    const likeButton = item.querySelector('.like-btn');

    let quantity = parseInt(quantityElement.textContent);
    let liked = false;

    minusButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            updateTotalPrice();
        }
        quantityElement.textContent = quantity;
    });

    plusButton.addEventListener('click', () => {
        quantity++;
        updateTotalPrice();
        quantityElement.textContent = quantity;
    });

    deleteButton.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
    });

    likeButton.addEventListener('click', () => {
        liked = !liked;
        likeButton.classList.toggle('liked', liked);
    });

    function updateTotalPrice() {
        const itemPrice = 20; // Replace with actual item price
        const total = quantity * itemPrice;
        totalPriceElement.textContent = total;
    }
});
