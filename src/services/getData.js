"use strict";
import Papa from 'papaparse'
import  fs from 'fs'
import readline from "readline"
import stream from 'stream'

import { prisma } from '../generated/prisma-client'

const provinceFile = 'H:/projectNew/data/province.csv'
const cityFile = 'H:/projectNew/data/city.csv'
const areaFile = 'H:/projectNew/data/area.csv'
const streetFile = 'H:/projectNew/data/street.csv'
const villageFile = 'H:/projectNew/data/village.csv'
const majorFile = 'H:/projectNew/data/major.csv'

const readFile = function (fileName,encode) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName,encode, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const parseCsv = function (data) {
  return new Promise(function (resolve, reject) {
    Papa.parse(data, {complete:function(results) {
      resolve(results);
    }});
  });
};

// 添加专业信息
async function addMajor(){
  try {
    const file = await readFile(majorFile, 'utf8')
    const results = await parseCsv(file)
    for(let value of results.data) {
      try{
      const newMajor = await prisma
        .createMajor({
          name: value[1],
          category: value[0],
          education:value[2]
        })
      console.log(newMajor);
    }catch(err){
      console.log(err)
      continue
    }
    }
  } catch (err) {
    console.log(err);
  }
}
// 添加省份信息
async function addProvince() {
  try {
    const file = await readFile(provinceFile, 'utf8')
    const results = await parseCsv(file)
    for(let value of results.data) {
      try{
      const newProvince = await prisma
        .createProvince({
          code: value[0],
          name: value[1],
        })
      console.log(newProvince);
    }catch(err){
      console.log(err)
      continue
    }
    }

  } catch (err) {
    console.log(err);
  }
}

// 添加市一级信息
async function addCity() {
  try {
    const file = await readFile(cityFile, 'utf8')
    const results = await parseCsv(file)
    for(let value of results.data) {
      try{
        const newCity = await prisma
          .createCity({
            code: value[0],
            name: value[1],
            province:{connect:{code:value[2]}}
          })
        console.log(newCity);
      }catch(err){
        console.log(err)
        continue
      }
    }
  } catch (err) {
    console.log(err);
  }
}

// 添加区一级信息
async function addArea() {
  try {
    const file = await readFile(areaFile, 'utf8')
    const results = await parseCsv(file)
    for(let value of results.data) {
      try{
        const newArea = await prisma
          .createArea({
            code: value[0],
            name: value[1],
            city:{connect:{code:value[2]}}
          })
        console.log(newArea);
      }catch(err){
        console.log(err)
        continue
      }
    }
  } catch (err) {
    console.log(err);
  }
}

// 添加区一级信息
async function addStreet() {
  try {
    const file = await readFile(streetFile, 'utf8')
    const results = await parseCsv(file)
    for(let value of results.data) {
      console.log( value[0])
      console.log( value[1])
      console.log( value[2])
      try{
        const newStreet = await prisma
          .createStreet({
            code: value[0],
            name: value[1],
            Area:{connect:{code:value[2]}}
          })
        console.log(newStreet);
      }catch(err){
        console.log(err)
        continue
      }
    }
  } catch (err) {
    console.log(err);
  }
}

// 添加村一级信息
async function addVillage() {
  try {
    const file = await readFile(villageFile, 'utf8')
    const results = await parseCsv(file)
    for(let value of results.data) {
      try{
        const newVillage = await prisma
          .createVillage({
            code: value[0],
            name: value[1],
            street:{connect:{code:value[2]}}
          })
        console.log(newVillage);
      }catch(err){
        console.log(err)
        continue
      }
    }
  } catch (err) {
    console.log(err);
  }
}
