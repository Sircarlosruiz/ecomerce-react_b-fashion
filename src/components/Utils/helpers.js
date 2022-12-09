import { useEffect } from "react";

export const filterDuplicatesInObjectByKey = (object) =>
	Array.from(new Set(object.map((x) => x.key))).map((key) => object.find((a) => a.key === key));

export const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) return;

			handler(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
};

export const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

export const getUrlImg = (name) => {
    const url = `assets/${name}`;
    // console.log(url);
    return url;
  };