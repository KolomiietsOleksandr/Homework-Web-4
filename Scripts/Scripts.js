function showDropdown() {
    var input = document.querySelector('.text-ser');
    var dropdown = document.querySelector('#dropdown');
    if (input.value.trim() !== '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}
