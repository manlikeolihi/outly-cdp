// Fetch and display events
function loadEvents() {
  fetch('https://62uggz6xs7.execute-api.ap-southeast-2.amazonaws.com/dev/api/events')
    .then(response => response.json())
    .then(data => {
      console.log("Events:", data); // just to verify
      const eventGrid = document.getElementById('event-grid');
      eventGrid.innerHTML = ''; // Clear existing events

      data.forEach(event => {
        const eventCard = `
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm">
              <img src="${event.image}" class="card-img-top" alt="${event.title}">
              <div class="card-body">
                <h5 class="card-title">${event.title}</h5>
                <p class="card-text">
                  📍 ${event.city}<br>
                  📅 ${event.date}<br>
                  🎯 ${event.category}<br>
                  👥 <span class="attendees-count">${event.currentAttendees} / ${event.maxAttendees}</span> attending
                </p>
                <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#eventModal" 
                  onclick="showEventModal('${event._id}', '${event.title}', '${event.image}', '${event.city}', '${event.date}', '${event.category}', '${event.currentAttendees}', '${event.maxAttendees}')">
                  Join Event
                </button>
              </div>
            </div>
          </div>
        `;
        eventGrid.innerHTML += eventCard;
      });
    })
    .catch(error => console.error('Error fetching events:', error));
}

// Function to show event modal
function showEventModal(id, title, image, city, date, category, currentAttendees, maxAttendees) {
  document.getElementById('eventModalLabel').textContent = title;
  document.getElementById('modalContent').innerHTML = `
    <img src="${image}" alt="${title}" class="img-fluid mb-3">
    <p><strong>📍 Location:</strong> ${city}</p>
    <p><strong>📅 Date:</strong> ${date}</p>
    <p><strong>🎯 Category:</strong> ${category}</p>
    <p><strong>👥 Attendees:</strong> <span id="modal-attendees">${currentAttendees} / ${maxAttendees}</span></p>
    <button class="btn btn-success w-100 mt-3" onclick="joinEvent('${id}')">Confirm Join</button>
  `;
}

// Join event function
function joinEvent(eventId) {
  console.log('🔁 Trying to join event with ID:', eventId);
  fetch(`https://62uggz6xs7.execute-api.ap-southeast-2.amazonaws.com/dev/api/events/${eventId}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      if (data.message === 'Successfully joined event') {
        alert(`Joined ${data.event.name}. Attendees: ${data.event.attendees}`);
        loadEvents(); // Refresh the events display
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Error joining event:', error);
      console.error('Full error details:', {
        message: error.message,
        stack: error.stack
      });
      alert('Failed to join event. Please try again. Check console for details.');
    });
}

// Load events when page loads
document.addEventListener('DOMContentLoaded', loadEvents);

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

// Join Event Button Handler
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const title = card.querySelector('.card-title').textContent;
    const cardText = card.querySelector('.card-text');
    const image = card.querySelector('.card-img-top').src;

    // Extract event details from card text
    const city = Array.from(card.querySelectorAll('.card-text')).find(p =>
      p.textContent.includes('📍')
    ).textContent.split('📍')[1].split('\n')[0].trim();
    
    const date = Array.from(card.querySelectorAll('.card-text')).find(p =>
      p.textContent.includes('📅')
    ).textContent.split('📅')[1].split('\n')[0].trim();
    
    const category = Array.from(card.querySelectorAll('.card-text')).find(p =>
      p.textContent.includes('🎯')
    ).textContent.split('🎯')[1].split('\n')[0].trim();
    
    const attendees = Array.from(card.querySelectorAll('.card-text')).find(p =>
      p.textContent.includes('👥')
    ).textContent.split('👥')[1].trim();

    // Update modal content
    document.getElementById('eventModalLabel').textContent = title;
    document.getElementById('modalContent').innerHTML = `
      <img src="${image}" alt="${title}" class="img-fluid mb-3">
      <p><strong>📍 Location:</strong> ${city}</p>
      <p><strong>📅 Date:</strong> ${date}</p>
      <p><strong>🎯 Category:</strong> ${category}</p>
      <p><strong>👥 Attendees:</strong> <span id="modal-attendees">${attendees}</span></p>
      <button class="btn btn-success w-100 mt-3" id="confirmJoinBtn">Join This Event</button>
    `;

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    modal.show();

    // Add join confirmation logic
    document.getElementById('confirmJoinBtn').addEventListener('click', () => {
      // Extract current and total attendees
      const [current, total] = attendees.split('/').map(n => parseInt(n.trim()));
      
      if (current < total) {
        const newCount = `${current + 1} / ${total} attending`;
        
        // Update modal attendees count
        document.getElementById('modal-attendees').textContent = newCount;

        // Update the event card's attendees count
        const cardAttendeesSpan = card.querySelector('.attendees-count');
        if (cardAttendeesSpan) {
          cardAttendeesSpan.textContent = `👥 ${newCount}`;
        }

        // Show success message
        alert(`You've joined "${title}"!`);
      } else {
        alert('Sorry, this event is full.');
      }

      // Close modal
      const modalInstance = bootstrap.Modal.getInstance(document.getElementById('eventModal'));
      modalInstance.hide();
    });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});

// Search Functionality
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const city = Array.from(card.querySelectorAll('.card-text')).find(p =>
      p.textContent.includes('📍')
    ).textContent.toLowerCase();

    if (title.includes(query) || city.includes(query)) {
      card.parentElement.style.display = 'block';
    } else {
      card.parentElement.style.display = 'none';
    }
  });
});

// Category Filter Functionality
document.querySelectorAll('.category-filter').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    document.querySelectorAll('.card').forEach(card => {
      const categoryText = Array.from(card.querySelectorAll('.card-text')).find(p =>
        p.textContent.includes('🎯')
      ).textContent;

      if (category === 'all' || categoryText.includes(category)) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  });
});
