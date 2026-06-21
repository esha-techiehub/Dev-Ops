// DevOps Learning Hub - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSearch();
    initScrollToTop();
    initSmoothScroll();
    initTableOfContents();
});

// Search Functionality
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Open search modal
    searchBtn.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });

    // Close search modal when clicking outside
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            closeSearch();
        }
    });

    // Close search on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
    });

    // Search input handler
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.innerHTML = '<div style="padding: 20px; text-align: center; color: #57606a;">Type at least 2 characters to search...</div>';
            return;
        }

        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });

    function closeSearch() {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    }

    function performSearch(query) {
        // Search through all content sections
        const searchableContent = [];
        
        // Get all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            const sectionId = section.id;
            const sectionTitle = section.querySelector('.section-header h2')?.textContent || '';
            
            // Search in headings and paragraphs
            const headings = section.querySelectorAll('h3, h4');
            headings.forEach(heading => {
                const text = heading.textContent;
                const content = getPreviewText(heading);
                
                if (text.toLowerCase().includes(query) || content.toLowerCase().includes(query)) {
                    searchableContent.push({
                        title: text,
                        preview: content,
                        section: sectionTitle,
                        element: heading
                    });
                }
            });

            // Search in content blocks
            const contentBlocks = section.querySelectorAll('.content-block p, .overview-card p, .benefit-card, .challenge-card');
            contentBlocks.forEach(block => {
                const text = block.textContent;
                if (text.toLowerCase().includes(query)) {
                    const heading = findNearestHeading(block);
                    searchableContent.push({
                        title: heading,
                        preview: text.substring(0, 150) + '...',
                        section: sectionTitle,
                        element: block
                    });
                }
            });
        });

        displaySearchResults(searchableContent, query);
    }

    function getPreviewText(element) {
        let preview = '';
        let sibling = element.nextElementSibling;
        let count = 0;
        
        while (sibling && count < 3) {
            if (sibling.tagName === 'P' || sibling.tagName === 'UL' || sibling.tagName === 'OL') {
                preview += sibling.textContent + ' ';
                count++;
            }
            sibling = sibling.nextElementSibling;
        }
        
        return preview.substring(0, 150) + '...';
    }

    function findNearestHeading(element) {
        let current = element.previousElementSibling;
        while (current) {
            if (current.tagName.match(/^H[3-6]$/)) {
                return current.textContent;
            }
            current = current.previousElementSibling;
        }
        return 'Content';
    }

    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div style="padding: 20px; text-align: center; color: #57606a;">No results found for "' + query + '"</div>';
            return;
        }

        // Remove duplicates
        const uniqueResults = [];
        const seen = new Set();
        
        results.forEach(result => {
            const key = result.title + result.preview;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueResults.push(result);
            }
        });

        // Limit to 10 results
        const limitedResults = uniqueResults.slice(0, 10);

        const html = limitedResults.map(result => {
            const highlightedTitle = highlightText(result.title, query);
            const highlightedPreview = highlightText(result.preview, query);
            
            return `
                <div class="search-result-item" data-element-id="${result.element.id || ''}">
                    <div class="search-result-title">${highlightedTitle}</div>
                    <div class="search-result-preview">${highlightedPreview}</div>
                    ${result.section ? `<div style="font-size: 12px; color: #0969da; margin-top: 4px;">${result.section}</div>` : ''}
                </div>
            `;
        }).join('');

        searchResults.innerHTML = html;

        // Add click handlers to search results
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
                const element = results.find(r => r.title === this.querySelector('.search-result-title').textContent.replace(/<mark>|<\/mark>/g, ''))?.element;
                if (element) {
                    closeSearch();
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Highlight the element briefly
                    element.style.backgroundColor = '#fff8c5';
                    setTimeout(() => {
                        element.style.backgroundColor = '';
                    }, 2000);
                }
            });
        });
    }

    function highlightText(text, query) {
        if (!text) return '';
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark style="background-color: #fff8c5; padding: 2px 4px; border-radius: 3px;">$1</mark>');
    }
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    if (!scrollBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scroll for Navigation Links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active Navigation Highlighting
function initTableOfContents() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    // Create intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                        link.style.color = '#0969da';
                        link.style.fontWeight = '600';
                    } else {
                        link.style.color = '';
                        link.style.fontWeight = '';
                    }
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Module Cards Interaction
document.addEventListener('DOMContentLoaded', function() {
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('click', function() {
            // Expand/collapse functionality (optional enhancement)
            this.classList.toggle('expanded');
        });
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchBtn').click();
    }
    
    // Ctrl/Cmd + Home to scroll to top
    if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Add print styles helper
function preparePrint() {
    window.print();
}

// Add copy code block functionality
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background-color: #0969da;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 4px 12px;
            font-size: 12px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        button.addEventListener('click', async function() {
            const code = block.textContent;
            try {
                await navigator.clipboard.writeText(code);
                button.textContent = 'Copied!';
                button.style.backgroundColor = '#2da44e';
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.style.backgroundColor = '#0969da';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
        });
    });
});

// Progress indicator
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #0969da, #2da44e);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Add table of contents generator for long sections
function generateTOC() {
    const headings = document.querySelectorAll('.content-section h3, .content-section h4');
    const toc = document.createElement('div');
    toc.className = 'auto-toc';
    toc.style.cssText = `
        position: fixed;
        right: 32px;
        top: 100px;
        max-width: 250px;
        background-color: #f6f8fa;
        border: 1px solid #d0d7de;
        border-radius: 6px;
        padding: 16px;
        display: none;
    `;
    
    // Only show on large screens
    if (window.innerWidth > 1400) {
        toc.style.display = 'block';
    }
    
    const tocTitle = document.createElement('h4');
    tocTitle.textContent = 'On this page';
    tocTitle.style.cssText = 'font-size: 14px; margin-bottom: 12px; font-weight: 600;';
    toc.appendChild(tocTitle);
    
    const tocList = document.createElement('ul');
    tocList.style.cssText = 'list-style: none; font-size: 13px;';
    
    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = 'heading-' + index;
        }
        
        const li = document.createElement('li');
        li.style.marginBottom = '8px';
        
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        link.style.cssText = 'color: #57606a; text-decoration: none;';
        link.addEventListener('mouseover', () => link.style.color = '#0969da');
        link.addEventListener('mouseout', () => link.style.color = '#57606a');
        
        if (heading.tagName === 'H4') {
            li.style.paddingLeft = '16px';
        }
        
        li.appendChild(link);
        tocList.appendChild(li);
    });
    
    toc.appendChild(tocList);
    document.body.appendChild(toc);
}

// Initialize TOC on large screens
if (window.innerWidth > 1400) {
    document.addEventListener('DOMContentLoaded', generateTOC);
}

// Add animation on scroll
const observerAnimation = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.module-card, .overview-card, .benefit-card, .challenge-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observerAnimation.observe(el);
    });
});

console.log('DevOps Learning Hub loaded successfully! 🚀');
console.log('Press Ctrl/Cmd + K to search');
