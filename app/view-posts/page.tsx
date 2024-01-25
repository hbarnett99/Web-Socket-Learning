'use client';

import { title } from '@/components/primitives';
import { User } from '@nextui-org/react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/table';
import { Tooltip } from '@nextui-org/tooltip';
import { it } from 'node:test';
import React, { Key, ReactNode } from 'react';
import { FaEdit, FaEye, FaHeart, FaTrash } from 'react-icons/fa';
import { idText } from 'typescript';

interface Post {
  id: number;
  username: string;
  title: string;
  description: string;
  likes: number;
  isLikedByUser: boolean;
}

const rows: Post[] = [
  {
    id: 1,
    username: 'amberAlert',
    title: 'Bionicles',
    description: 'How good were bionicles back in the day??!??!',
    likes: 148,
    isLikedByUser: true,
  },
  {
    id: 2,
    username: 'Brackish',
    title: 'A Turtle Moment',
    description:
      'A turtle moment can be defined by the slow actions of one resulting in painful consequences for those around them',
    likes: 292,
    isLikedByUser: true,
  },
  {
    id: 3,
    username: 'AverageAmputee',
    title: 'Using my leg as a golf club',
    description:
      'As far as I am aware, there are no rules against me using my leg as a putter',
    likes: 85,
    isLikedByUser: false,
  },
];

interface Columns extends Post {
  actions: ReactNode;
}

const columns = [
  {
    key: 'likes',
    label: 'Likes',
  },
  {
    key: 'username',
    label: 'User',
  },
  {
    key: 'title',
    label: 'Title',
  },
  {
    key: 'description',
    label: 'Description',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

export default function ViewPostsPage() {
  const renderCell = React.useCallback((item: Post, columnKey: keyof Post) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case 'username':
        return (
          <User
            avatarProps={{
              radius: 'lg',
              src: `xsgames.co/randomusers/avatar.php?g=female`,
            }}
            description={'@' + item.username}
            name={cellValue}
          >
            {item.username}
          </User>
        );
      case 'title':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm text-ellipsis whitespace-nowrap'>
              {cellValue}
            </p>
          </div>
        );
      case 'description':
        return <p className='flex text-ellipsis'>{cellValue}</p>;
      case 'likes':
        console.log;
        return (
          <Tooltip
            content='Like'
            className='cursor-pointer active:opacity-50 flex'
          >
            <span
              className={`text-lg ${
                item.isLikedByUser ? 'text-pink-500' : ''
              } cursor-pointer active:opacity-50`}
            >
              <span className='flex items-center'>
                <FaHeart />
                <span className='pl-2'>{item.likes}</span>
              </span>
            </span>
          </Tooltip>
        );
      default:
        return (
          <div className='relative flex items-center gap-2'>
            <Tooltip content='View'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <FaEye />
              </span>
            </Tooltip>
            <Tooltip content='Edit'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <FaEdit />
              </span>
            </Tooltip>
            <Tooltip
              color='danger'
              content='Delete'
            >
              <span className='text-lg text-danger cursor-pointer active:opacity-50'>
                <FaTrash />
              </span>
            </Tooltip>
          </div>
        );
    }
  }, []);

  return (
    <div className='grid grid-cols-1 w-full gap-4'>
      <h1 className={title()}>Posts</h1>
      <Table
        className='w-full text-left'
        aria-label='Example table with dynamic content'
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              align={column.key === 'actions' ? 'end' : 'start'}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell align={columnKey === 'actions' ? 'center' : 'left'}>
                  {renderCell(item, columnKey as keyof Post)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
