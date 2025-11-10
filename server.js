// Minimal backend placeholder
const express = require('express');
const app = express();
app.get('/api/health', (req,res)=>res.json({ok:true}));
app.post('/api/editions/:id/upload-pdf', (req,res)=>res.json({success:true,s3_key:"editions/demo.pdf"}));
app.listen(4000, ()=>console.log('backend running'));
