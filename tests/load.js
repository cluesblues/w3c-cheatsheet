

var test_load = new function () {
    this.setup = new function () {
	this.test_hasLoaded =
                    [{params: {id: "autocomplete"}, method: "waits.forElement"}];
    };

    // check that the correct tabs are displayed (and only one of them)
    this.test_correct_tabs = [
	{params: {id: "autocomplete", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'block'"}, method: "asserts.assertElemJS"},
	{params: {id: "mwbp", js: "window.getComputedStyle(element, null).getPropertyValue('display') === 'none'"}, method: "asserts.assertElemJS"}
    ];
    this.test_input_search = new function () {
	this.test_input = [{params: {id: "search", text:"title"}, method: "type"}];
	this.test_autocomplete_exists = [{params: {classname: "ac_results"}, method: "asserts.assertNode"},
					{params: {xpath: "//div[@class='ac_results']/ul"}, method: "asserts.assertNode"}];
	this.test_autocomplete_matches = [{params: {xpath: "//div[@class='ac_results']/ul/li[not(contains('title')"}, method: "asserts.assertNotNode"}];
	// First result must always be exact match (when it exists)
	this.test_autocomplete_matches = [{params: {xpath: "//div[@class='ac_results']/ul/li[1]", validator: "title"}, method: "asserts.assertText"}];
	this.test_select_result = [{params: {xpath: "//div[@class='ac_results']/ul/li[1]"}, method: "click"}];
	this.test_result_displayed = [{params: {xpath: "//div[@id='details']//h2"}, method: "asserts.assertNode"},
				      {params: {xpath: "//div[@id='details']//dt"}, method: "asserts.assertNode"}
				     ];
	// title exists as HTML attribute, element, SVG element
	// so is displayed as a list of 3 collapsed items
	// we check the first one is indeed hidden
	this.test_result_multiple_infoset_collapsed = [{params: {xpath: "//div[@id='details']/div[@class='context']/div", validator: "style.display|none"}, method: "asserts.assertProperty"}];
    };
};