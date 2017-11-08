/*	Testcafe for Siemens PLM, testing segments of CNN.com..
	v 1.0
	Dated 11/7/2017	
*/

import { Selector } from 'testcafe';

fixture `Assertions`
	.page `http://cnn.com`;
	
test('Assertion_Kicker_Top_Stories', async t => {
        
		//		Asserting the presence of kicker //
		const Kicker_Exists = Selector('h3').withAttribute('data-analytics', '_list-hierarchical-xs_article_').child('a').child('span').child('strong');
	
		//		Asserting the presence of at least 5 top stories  //
		
		const TopStories = Selector('h3').withAttribute('data-analytics', 'Top stories_list-xs_article_');
		
    await t
        .expect(Kicker_Exists).ok() 			//Kicker exist check//
		.expect(Kicker_Exists.count).eql(1) 	//Just for an extra check//
		.expect(TopStories.count).gte(5);		//Top Story count//
       	
});

