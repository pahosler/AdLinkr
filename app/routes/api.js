/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const express = require('express');
const router = new express.Router();

const Campaign = require('../models/Campaign');

router.post('/Campaigns/add', (req, res) => {
    if (!req.body.hasOwnProperty('campaignName')) {
        return res.json({
            'error': 'Please ensure campaign name is not empty is a string.',
        });
    }

    const currentTimestamp = new Date().getTime();
    const newCampaignData = {
        name: req.body.campaignName,
        createdTimestamp: currentTimestamp,
        lastModifiedTimestamp: currentTimestamp,
    };

    const newCampaign = new Campaign(newCampaignData);
    newCampaign.save((err, data) => {
        if (err) {
            return res.json({'error': err});
        }

        return res.json(data);
    });

    res.json({
        'error': 'Unknown Error Occured: Please contact technical support.',
    });
});

router.get('/*', (req, res) => {
    res.json({'error': 'Invalid endpoint.'});
});

module.exports = router;
