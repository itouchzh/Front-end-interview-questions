import { dirname } from 'path'

// 插件为一个函数
const fs = require('fs')
const path = require('path')

function diffDirAndFile(dirFilesArr = [], basePath = '') {
    const result = {
        dirs: [],
        files: [],
    }
    dirFilesArr.forEach((name) => {
        const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name))
        const isDirectory = currentFileStat.isDirectory()
        if (isDirectory) {
            result.dirs.push(name)
        } else {
            result.files.push(name)
        }
    })
    return result
}
function getTotalSrcDir(keyName) {
    const result = fs.readdirSync(path.resolve(__dirname, '../src'))
    const diffResult = diffDirAndFile(result, '../src')
    const resolveAliasesObj = {}
    diffResult.dirs.forEach((dirName) => {
        const key = `${keyName}${dirName}`
        const absPath = path.resolve(__dirname, '../src/' + dirname)
        resolveAliasesObj[key] = absPath
    })
    return resolveAliasesObj
}
export default ({ keyName = '@' } = {}) => {
    return {
        config: (config, env) => {
            console.log(config, env)
            const resolveAliasesObj = getTotalSrcDir(keyName)
            //  config 函数可以返回一个对象
            const result = fs.readdirSync(path.resolve(__dirname, '../src'))
            return {
                resolve: {
                    alias: resolveAliasesObj,
                },
            }
        },
    }
}
