import MarkupToHtml, { MarkupLanguage } from './MarkupToHtml';
import MdToHtml from './MdToHtml';
import HtmlToHtml from './HtmlToHtml';
import utils from './utils';
import setupLinkify from './MdToHtml/setupLinkify';
import validateLinks from './MdToHtml/validateLinks';
import headerAnchor from './headerAnchor';
const assetsToHeaders = require('./assetsToHeaders');

export enum LinkType {
	Anchor = 1,
	Image = 2,
}

export {
	MarkupToHtml,
	MarkupLanguage,
	MdToHtml,
	HtmlToHtml,
	setupLinkify,
	validateLinks,
	headerAnchor,
	assetsToHeaders,
	utils,
};
