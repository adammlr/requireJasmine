/*global describe, beforeEach, it, expect */
define(['scripts/myscript'], function (myscript) {
    'use strict';

    describe('A test on myscript', function () {
        it('can be run', function () {
            expect(myscript.value).toBe(1);
        });
    });
});