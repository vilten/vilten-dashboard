import mitt from "mitt";

export default defineNuxtPlugin(() => {
  const emitter = mitt();

  window.addEventListener("click", function (e) {
    emitter.emit("window_click", e);
  });

  return {
    provide: {
      event: emitter.emit, // Will emit an event
      listen: emitter.on, // Will register a listener for an event
    },
  };
});
