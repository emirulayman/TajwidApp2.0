/* ================= NAVIGATION & TABS ================= */
export function switchTab(tabId) {
    // Hide all sections
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    
    // Remove "active" look from all buttons
    document.querySelectorAll('.nav-btn').forEach(el => {
        el.classList.remove('active', 'bg-brand-50', 'text-brand-600', 'dark:bg-brand-900/30', 'dark:text-brand-400');
        el.classList.add('text-gray-600', 'hover:bg-gray-50', 'dark:text-gray-300', 'dark:hover:bg-slate-700/50');
    });

    // Show the section the user clicked
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) selectedTab.classList.add('active');
    
    // Make the button look "active"
    const activeBtn = document.querySelector(`.nav-btn[data-target="${tabId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'bg-brand-50', 'text-brand-600', 'dark:bg-brand-900/30', 'dark:text-brand-400');
        activeBtn.classList.remove('text-gray-600', 'hover:bg-gray-50', 'dark:text-gray-300', 'dark:hover:bg-slate-700/50');
    }
}

/* ================= DARK MODE LOGIC ================= */
export function toggleTheme() {
    const htmlClasses = document.documentElement.classList;
    const knob = document.getElementById('theme-toggle-knob');
    
    if (htmlClasses.contains('dark')) {
        htmlClasses.remove('dark');
        knob.classList.remove('translate-x-4');
    } else {
        htmlClasses.add('dark');
        knob.classList.add('translate-x-4');
    }
}

/* ================= ACCORDION LOGIC ================= */
export function toggleAccordion(element) {
    const item = element.parentElement;
    item.classList.toggle('open');
}

/* ================= MAKHARIJ DIAGRAM LOGIC ================= */
export function highlightZone(...zoneIds) {
    document.querySelectorAll('.makhraj-zone').forEach(zone => {
        if (zoneIds.includes(zone.id)) {
            zone.classList.add('active');
            zone.classList.remove('dimmed');
        } else {
            zone.classList.add('dimmed');
            zone.classList.remove('active');
        }
    });
}

export function resetZones() {
    document.querySelectorAll('.makhraj-zone').forEach(zone => {
        zone.classList.remove('active', 'dimmed');
    });
}