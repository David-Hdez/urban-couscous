customElements.define("plan-fabrica",
  class extends HTMLElement {
    // Kept in private fields, so they never show up as attributes
    #color = null;
    #size = null;
    #renderQueued = false;

    get color() { return this.#color; }
    set color(v) { this.#color = v; this.#scheduleRender(); }

    get size() { return this.#size; }
    set size(v) { this.#size = v; this.#scheduleRender(); }

    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
      console.log("Custom element added to page.");
    }

    disconnectedCallback() {
      console.log("Custom element removed from page.");
    }

    connectedMoveCallback() {
      console.log("Custom element moved with moveBefore()");
    }

    adoptedCallback() {
      console.log("Custom element moved to new page.");
    }

    // Properties set together in one block render once, with all their values
    #scheduleRender() {
      if (this.#renderQueued) return;
      this.#renderQueued = true;
      queueMicrotask(() => {
        this.#renderQueued = false;
        this.render();
      });
    }

    render() {
      // Add each new property here so it is required before showing
      const values = [this.#color, this.#size];
      if (values.includes(null)) {
        this.textContent = "Loading...";
        return;
      }
      this.textContent = `Color: ${this.#color}, size: ${this.#size}`;
    }
  }
);
