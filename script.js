// Function to make the HTTP request to the API using fetch 
async function fetchAndDisplayUnresolvedTickets() {
  // TASK 2
  // Implement try catch
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // Get the relevant data from the response
    const data = await response.json();
    // Get the sections that we will add dynamic data into
    const error = document.getElementById('ticket-fetch-error');
    const ticketSection = document.getElementById('tickets');

    // Error throwing
    if (data.length === 0) {
      throw new Error("No tickets found!");
    }
    if (!response.ok) {
      throw new Error("Failed to fetch tickets!");
    }
    // TASK 3
    // Display data dynamically
    data.forEach(ticket => {
      const ticketDiv = document.createElement('div');
      ticketDiv.innerHTML = `
        <h2>Ticket Id: ${ticket.id}</h2>
        <p>Customer Name: ${ticket.userId}</p>
        <p>Issue Description: ${ticket.title}</p>
        <p>Details: ${ticket.body}</p>
      `;
      ticketSection.appendChild(ticketDiv);
    })
    // Handling error and setting the content of the error section
  } catch (e) {
    error.textContent = `Error: Fetch failed ${e.message}`;
  } finally {
    // TASK 4 use finally
    // always runs regardless of try catch
    console.log("Fetch completed");
  }
}
// call main function
fetchAndDisplayUnresolvedTickets();