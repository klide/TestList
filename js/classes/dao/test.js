/**
 * Dao Test
 */
Test.Dao = function () {

    /**
     * Simply Return ALL tests from JSON file
     */
    this.getAllTests = function () {
        return $.ajax({
            url: './js/data/data.json'
        });
    }
}