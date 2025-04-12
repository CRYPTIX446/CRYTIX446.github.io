<!-- JavaScript for page navigation -->
<script>
// Function to display the next page
function showNextPage(currentPage, totalPages) {
  if (currentPage < totalPages) {
    document.getElementById('page-' + currentPage).style.display = 'none'; // Hide current page
    document.getElementById('page-' + (currentPage + 1)).style.display = 'block'; // Show next page
  }
}

// Function to display the previous page
function showPreviousPage(currentPage) {
  if (currentPage > 1) {
    document.getElementById('page-' + currentPage).style.display = 'none'; // Hide current page
    document.getElementById('page-' + (currentPage - 1)).style.display = 'block'; // Show previous page
  }
}

// Function to navigate to a specific page
function goToPage(pageNumber) {
  var totalPages = 520; // Update if your pages increase or decrease
  if (pageNumber >= 1 && pageNumber <= totalPages) {
    // Hide all pages first
    for (let i = 1; i <= totalPages; i++) {
      document.getElementById('page-' + i).style.display = 'none';
    }
    // Show the selected page
    document.getElementById('page-' + pageNumber).style.display = 'block';
  }
}

// When the page loads, show the first page
window.onload = function() {
  goToPage(1);
}
</script>

