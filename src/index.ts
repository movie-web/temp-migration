import { initialize } from "@/init";
import "./styles.css";

const newDomainUrl = "https://movie-web.app/search/movie?migrated=1";

let isChildOfParent = false;
try {
	isChildOfParent = window.parent.location.href !== location.href;
} catch {
	// It'll throw an error if we try to access a cross-origin domain, which means we ARE a child!
	isChildOfParent = true;
}

if (isChildOfParent) {
	// In an iframe, emit messages to parent
	initialize();
} else {
	// Not in an iframe, init redirect
	location.href = newDomainUrl;
}
